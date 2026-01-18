import React from "react";
import useAxios from "../../../hooks/useAxios";
import UseAuth from "../../../hooks/UseAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyParcels = () => {
  const { user } = UseAuth();
  const axios = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
      data: parcels = [],
      refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["parcels", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
    
    
    const handleDelete = async (id) => {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "This parcel will be permanently deleted.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        deleteParcel.mutate(id);
      }
    };


    const deleteParcel = useMutation({
      mutationFn: async (id) => {
        console.log("Deleting:", id);
        return await axios.delete(`/parcels/${id}`);
      },

      onSuccess: () => {
          refetch();
      },

      onError: () => {
        Swal.fire("Error", "Could not delete parcel.", "error");
      },
    });

    

  

  

  const handleUpdate = (id) => {
    navigate(`/parcels/edit/${id}`);
  };

  const paidCount = parcels.filter((p) => p.paid).length;
  const unpaidCount = parcels.length - paidCount;

  if (isLoading)
    return (
      <div className="p-6">
        <div className="text-center">Loading...</div>
      </div>
    );

  if (error)
    return (
      <div className="p-6">
        <div className="text-center text-error">Failed to load parcels</div>
      </div>
    );

  console.log(parcels);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">My Parcels</h2>

      <div className="mb-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Payment Summary</th>
              <th className="text-right">Total</th>
              <th className="text-right">Paid</th>
              <th className="text-right">Unpaid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Payment Status</td>
              <td className="text-right">{parcels.length}</td>
              <td className="text-right">{paidCount}</td>
              <td className="text-right">{unpaidCount}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Parcel</th>
              <th>Weight (KG)</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Cost (Tk)</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((p, idx) => (
              <tr key={p._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="font-medium">{p.parcelName}</div>
                  <div className="text-xs text-gray-500">Type: {p.type}</div>
                </td>
                <td>{p.parcelWeight}</td>
                <td>
                  <div className="font-medium">{p.senderName}</div>
                  <div className="text-xs">{p.senderPhone}</div>
                  <div className="text-xs text-gray-500">
                    {p.senderDistrict}
                  </div>
                </td>
                <td>
                  <div className="font-medium">{p.receiverName}</div>
                  <div className="text-xs">{p.receiverContact}</div>
                  <div className="text-xs text-gray-500">
                    {p.receiverDistrict}
                  </div>
                </td>
                <td>{Number(p.cost ?? p.price ?? 0).toFixed(2)}</td>
                <td className="">
                  {p.paymentStatus === "not paid" ? (
                            <Link
                                to={`/payment/${p?._id}`}
                     
                      className="badge badge-success"
                    >
                      Pay
                    </Link>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="badge badge-warning">Paid</span>
                    </div>
                  )}
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleUpdate(p._id)}
                      className="btn btn-sm btn-outline"
                    >
                      Update
                    </button>
                    <button
                                onClick={() => {
                                    handleDelete(p._id)
                                    
                                }}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {parcels.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-6">
                  No parcels found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
