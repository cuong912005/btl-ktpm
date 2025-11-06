import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const OAuthButtons = () => {
	const handleGoogleLogin = () => {
		window.location.href = "/api/auth/google";
	};

	const handleGithubLogin = () => {
		window.location.href = "/api/auth/github";
	};

	return (
		<div className="space-y-3">
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<div className="w-full border-t border-gray-300"></div>
				</div>
				<div className="relative flex justify-center text-sm">
					<span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-3">
				<button
					type="button"
					onClick={handleGoogleLogin}
					className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
				>
					<FcGoogle className="w-5 h-5" />
					<span className="text-sm font-medium">Google</span>
				</button>

				<button
					type="button"
					onClick={handleGithubLogin}
					className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
				>
					<FaGithub className="w-5 h-5" />
					<span className="text-sm font-medium">GitHub</span>
				</button>
			</div>
		</div>
	);
};

export default OAuthButtons;
