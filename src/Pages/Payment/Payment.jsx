import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import useAxios from "../../hooks/useAxios";

const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxios();
  const queryClient = useQueryClient();

  // Fetch parcel
  const {
    data: parcel,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["parcel", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${id}`);
      return res.data;
    },
  });

  // Stripe payment mutation
  const stripePayment = useMutation({
    mutationFn: async () => {
      const res = await axiosSecure.post("/create-checkout-session", {
        parcelId: id,
      });
      return res.data;
    },
    onSuccess: (data) => {
      Swal.fire({
        title: "Redirecting to Stripe",
        text: "Complete your payment securely",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = data.url; // Stripe checkout URL
      });
    },
    onError: () => {
      Swal.fire("Payment Failed", "Something went wrong", "error");
    },
  });

  const handlePayment = () => {
    Swal.fire({
      title: "Confirm Payment",
      text: `Pay ${parcel?.cost ?? 0} Tk via Stripe?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Pay Now",
    }).then((result) => {
      if (result.isConfirmed) {
        stripePayment.mutate();
      }
    });
  };

  if (isLoading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-500">Failed to load parcel</div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-6">Stripe Payment</h2>

      <div className="mb-6">
        <p className="text-lg font-medium">{parcel?.parcelName}</p>
        <p className="text-sm text-gray-500">Type: {parcel?.type}</p>
        <p className="mt-2">
          <span className="font-medium">Total:</span> {parcel?.cost ?? 0} Tk
        </p>
      </div>

      <button
        onClick={handlePayment}
        className="w-full bg-accent text-white py-2 rounded transition"
      >
        Pay with Stripe ({parcel?.cost ?? 0} Tk)
      </button>

      <button
        onClick={() => navigate("/my-parcels")}
        className="w-full mt-3 bg-gray-200 py-2 rounded"
      >
        Cancel
      </button>
    </div>
  );
};

export default Payment;
