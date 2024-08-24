import { useMutation } from "@tanstack/react-query";
import { singup as singupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: singupApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        "Account successfully created. Please verify the new account from the user's email address"
      );
    },
  });

  return { signup, isLoading };
}
