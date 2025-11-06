import { useNavigate } from "react-router-dom";
import { XCircle } from "lucide-react";

const OAuthErrorPage = () => {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center max-w-md mx-auto p-8">
				<XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
				<h1 className="text-2xl font-bold mb-2">Đăng nhập thất bại</h1>
				<p className="text-gray-400 mb-6">
					Đã có lỗi xảy ra trong quá trình đăng nhập. Vui lòng thử lại.
				</p>
				<button
					onClick={() => navigate("/login")}
					className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
				>
					Quay lại đăng nhập
				</button>
			</div>
		</div>
	);
};

export default OAuthErrorPage;
