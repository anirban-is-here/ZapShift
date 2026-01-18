import { parse } from "dotenv";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import { calculateParcelPrice } from "./price";
import Swal from "sweetalert2";

import useAxios from "../../hooks/useAxios";
import UseAuth from "../../hooks/UseAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
    const serviceCenters = useLoaderData();
  const axios = useAxios();
  const { user } = UseAuth();
  const navigate = useNavigate();

  const regionsAll = serviceCenters.map((center) => center.region);
  const regions = [...new Set(regionsAll)];

  console.log(user);
  
  const senderDistrictByRegion = serviceCenters
    .filter((center) => center.region === watch("senderRegion"))
    .map((center) => center.district);

  const receiverDistrictByRegion = serviceCenters
    .filter((center) => center.region === watch("receiverRegion"))
    .map((center) => center.district);

  const handleSendParcel = (data) => {
    const type = data.type;
    const weight = parseFloat(data.parcelWeight);
    const senderDistrict = data.senderDistrict;
    const receiverDistrict = data.receiverDistrict;
    console.log(type, weight, senderDistrict, receiverDistrict);
    console.log(data)

    const price = calculateParcelPrice({
      type,
      weight,
      senderDistrict,
      receiverDistrict,
    });
      console.log("Parcel Price: ", price);
      if (price) {
          Swal.fire({
            icon: "question",
            title: `Total Cost: ${price.toFixed(2)} Tk`,
            text: `Do you want to proceed?`,

            showCancelButton: true,
            confirmButtonText: "Yes, Proceed",
            cancelButtonText: "Cancel",
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                const res = await axios.post("/parcels", {
                  ...data,
                  cost: price,
                  email: user?.email,
                  paymentStatus: "not paid"
                  
                });

                Swal.fire(
                  "Booking Confirmed!",
                  "Your parcel has been booked.",
                  "success"
                );
                navigate("/parcels")
                console.log("Parcel booked successfully:", res.data);
              } catch (err) {
                Swal.fire("Booking Failed", "Server error occurred", "error");
                console.error("Error booking parcel:", err);
              }
            }
          });
        } else {
          Swal.fire("Error", "Unable to calculate parcel price.", "error");
        }
  };

  return (
    <div className="py-10 px-20 mt-5 mb-15 bg-secondary rounded-xl">
      <h2 className="text-4xl font-bold text-primary mb-2">Send A Parcel</h2>
      <p className="text-lg text-base-content mb-3">
        Enter your parcel details
      </p>
      <form className="form" onSubmit={handleSubmit(handleSendParcel)}>
        <div className="flex items-center gap-8 mb-3">
          <label className="flex items-center gap-2 text-lg cursor-pointer">
            <input
              type="radio"
              required
              value="document"
              {...register("type")}
              className="form-radio radio-primary bg-neutral"
            />
            <span>Document</span>
          </label>
          <label className="flex items-center gap-2 text-lg cursor-pointer">
            <input
              type="radio"
              value="not-document"
              {...register("type")}
              className="form-radio radio-primary bg-neutral"
            />
            <span>Not-Document</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-3 ">
          <div>
            <label className="block text-md mb-1 text-base-content">
              Parcel Name
            </label>
            <input
              {...register("parcelName")}
              className="form-input input-primary w-full text-md"
              required
              placeholder="Parcel Name"
            />
          </div>
          <div className="">
            <label className="block form-label text-md mb-1 text-base-content">
              Parcel Weight (KG)
            </label>
            <input
              required
              {...register("parcelWeight")}
              className="form-input w-full text-md"
              type="number"
              step="0.01"
              placeholder="Parcel Weight (KG)"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-bold mb-3 text-secondary">Sender Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-md mb-1">Sender Name</label>
                <input
                  {...register("senderName")}
                  className="form-input input-bordered w-full text-md"
                  defaultValue={user?.displayName}
                  required
                />
              </div>

              <div>
                <label className="block textmd mb-1">Address</label>
                <input
                  {...register("senderAddress")}
                  className="form-input w-full text-md"
                  placeholder="Address"
                  required
                />
              </div>
              <div>
                <label className="block text-md mb-1">Sender Phone No</label>
                <input
                  {...register("senderPhone")}
                  className="form-input input-bordered w-full text-md"
                  placeholder="Sender Phone No"
                  required
                />
              </div>
              <div>
                <label className="block text-md mb-1"> Sender Region </label>
                <select
                  {...register("senderRegion")}
                  className="form-select w-full text-md"
                  required
                >
                  {regions.map((region, index) => (
                    <option key={index} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-md mb-1">Sender District</label>
                <select
                  {...register("senderDistrict")}
                  className="form-select w-full text-md"
                  required
                >
                  {senderDistrictByRegion.map((region, index) => (
                    <option key={index} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-md mb-1">Pickup Instruction</label>
                <textarea
                  {...register("pickupInstruction")}
                  className="form-textarea input-border w-full text-md h-24"
                  placeholder="Pickup Instruction"
                ></textarea>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-secondary">Receiver Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-md mb-1">Receiver Name</label>
                <input
                  {...register("receiverName")}
                  className="form-input input-bordered w-full text-md"
                  placeholder="Receiver Name"
                  required
                />
              </div>
              <div>
                <label className="block text-md mb-1">Receiver Address</label>
                <input
                  {...register("receiverAddress")}
                  className="form-input input-bordered w-full text-md"
                  placeholder="Address"
                  required
                />
              </div>
              <div>
                <label className="block text-md mb-1">
                  Receiver Contact No
                </label>
                <input
                  {...register("receiverContact")}
                  className="form-input input-bordered w-full text-md"
                  placeholder="Sender Contact No"
                  required
                />
              </div>
              <div>
                <label className="block text-md mb-1">Receiver Region</label>
                <select
                  {...register("receiverRegion")}
                  className="form-select w-full text-md"
                  required
                >
                  {regions.map((region, index) => (
                    <option key={index} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-md mb-1">Receiver District</label>
                <select
                  {...register("receiverDistrict")}
                  className="form-select select-bordered w-full text-md"
                  required
                >
                  {receiverDistrictByRegion.map((region, index) => (
                    <option key={index} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-md mb-1">
                  Delivery Instruction
                </label>
                <textarea
                  {...register("deliveryInstruction")}
                  className="form-textarea w-full text-md h-24"
                  placeholder="Delivery Instruction"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <p className="text-md mt-6 mb-3 text-base-content/90">
          * PickUp Time 4pm–7pm Approx.
        </p>

        <button className=" w-full btn-secondary text-black text-md px-8">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
