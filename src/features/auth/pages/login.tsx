import { useState } from "react"
import { useLoginState } from "../store/authStore"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Login from '../../../assets/Logiin.jpg';


import type { loginReq } from "../models/loginModel"

function LoginPage() {
    const { login } = useLoginState()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const data: loginReq = { email, password }
        login(data)
    }

    return (
        <div className="min-h-screen flex bg-muted">
            <div
                className="hidden md:flex w-1/2 relative p-12 flex-col justify-center items-start text-white"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Login})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold mb-6">
                        Welcome to FSM
                    </h1>
                    <p className="text-lg mb-4">
                        Manage your field operations with precision and efficiency.
                    </p>
                    <ul className="list-disc ml-5 space-y-2 text-white/90">
                        <li>Track your field workforce in real-time</li>
                        <li>Optimize tasks and schedules</li>
                        <li>Generate reports & insights easily</li>
                    </ul>
                </div>
            </div>

            {/* Right Side - Login Form */}
            {/* Right Side - Login Form without Card */}
            <div className="flex w-full md:w-1/2 justify-center items-center p-8">
                <div className="w-full max-w-md">
                    <h2 className="text-4xl font-bold mb-2">Welcome Back</h2>
                    <p className="text-sm text-muted-foreground mb-6">
                        Access your precision field management dashboard.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Business Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <Label htmlFor="password">Password</Label>
                                <button
                                    type="button"
                                    className="text-sm text-primary hover:underline"
                                >
                                    Forgot Password?
                                </button>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Remember */}
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="remember"
                                checked={remember}
                                onCheckedChange={(checked) => setRemember(!!checked)}
                            />
                            <Label htmlFor="remember" className="text-sm font-normal">
                                Keep me signed in for 30 days
                            </Label>
                        </div>

                        {/* Submit */}
                        <Button type="submit" className="w-full">
                            Sign In
                        </Button>
                    </form>

                    {/* Footer */}
                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        Don't have an account?
                        <button type="button" className="ml-1 text-primary hover:underline">
                            Start a free trial
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage