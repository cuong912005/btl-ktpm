import express from "express";
import { login, logout, signup, refreshToken, getProfile, oauthSuccess, oauthFailure } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import passport from "../lib/passport.js";

const router = express.Router();

// Traditional auth routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.get("/profile", protectRoute, getProfile);

// Google OAuth routes
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/api/auth/oauth/failure", session: false }),
	oauthSuccess
);

// GitHub OAuth routes
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));
router.get(
	"/github/callback",
	passport.authenticate("github", { failureRedirect: "/api/auth/oauth/failure", session: false }),
	oauthSuccess
);

// OAuth failure route
router.get("/oauth/failure", oauthFailure);

export default router;
