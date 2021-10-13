import React from 'react'

export default function Footer() {
    return (
        <section className="w-full bg-indigo-900 mt-7">
        <div className="container mx-auto text-white grid py-20 grid-cols-5 ">
            <ul className="px-3" >
                <li className="py-4"><h2 className="text-xl font-semibold" >Riders Institute</h2></li>
                <li className="py-1 text-sm">20/F Green Road, Dhanmondi, Dhaka</li>
                <li className="py-1">info@themevessel.com</li>
                <li className="py-1">+0477 85X6 552</li>
            </ul>
            <ul className="px-2 text-sm">
                <li className="py-4"><h2 className="text-xl font-semibold">Helpful Links</h2></li>
                <li className="py-1">About Us</li>
                <li className="py-1">Terms & Conditions</li>
                <li className="py-1">Privacy Policy</li>
                <li className="py-1">Blog</li>
            </ul>
            <ul className="px-2 text-sm">
                <li className="py-4"><h2 className="text-xl font-semibold">Job Seekers</h2></li>
                <li className="py-1">Create Account</li>
                <li className="py-1">Career Counseling</li>
                <li className="py-1">My Oficiona</li>
                <li className="py-1">FAQ</li>
            </ul>
            <ul className="px-2 text-sm">
                <li className="py-4"><h2 className="text-xl font-semibold">Employers</h2></li>
                <li className="py-1">Create Account</li>
                <li className="py-1">Products & Service</li>
                <li className="py-1">Post a Job</li>
                <li className="py-1">FAQ</li>
            </ul>
           
        </div>
        <div className="border-t py-3" >
            <div className="container mx-auto text-gray-100 text-sm">
                <div className="grid grid-cols-2 py-3">
                  
                </div>
            </div>
        </div>
    </section>
    )
}
