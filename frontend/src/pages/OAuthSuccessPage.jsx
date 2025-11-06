import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import LoadingSpinner from "../components/LoadingSpinner";

const OAuthSuccessPage = () => {
	const navigate = useNavigate();
	const { checkAuth } = useUserStore();

	useEffect(() => {
		const handleOAuthSuccess = async () => {
			try {
				// Refresh user data after OAuth login
				await checkAuth();
				// Redirect to home page
				setTimeout(() => {
					navigate("/");
				}, 1000);
			} catch (error) {
				console.error("OAuth success error:", error);
				navigate("/login");
			}
		};

		handleOAuthSuccess();
	}, [checkAuth, navigate]);

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center">
				<LoadingSpinner />
				<p className="mt-4 text-lg">Đăng nhập thành công! Đang chuyển hướng...</p>
			</div>
		</div>
	);
};

export default OAuthSuccessPage;
