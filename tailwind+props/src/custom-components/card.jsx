import React from "react";

function Card(props){
    return(        
        <div className="max-w-sm mx-auto mb-5 bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
                <img className="w-full h-36 object-cover" src="https://randomuser.me/api/portraits/men/10.jpg" alt="Profile Cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            </div>

            <div className="px-6 py-4 relative">
                <img className="w-16 h-16 rounded-full border-4 border-white shadow-md absolute -top-8 left-6" src="https://randomuser.me/api/portraits/lego/5.jpg" alt="Profile Picture" />
                <div className="ml-20">
                    <h2 className="text-xl font-semibold text-gray-900">{props.name}</h2>
                    <p className="text-gray-500 text-sm">{props.job}</p>
                </div>

                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                    John is a passionate software engineer with over 5 years of experience in web development.
                </p>
            </div>

            <div className="px-6 pb-4 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">#WebDevelopment</span>
                <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">#JavaScript</span>
                <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">#TailwindCSS</span>
            </div>
        </div>
    );
}

export default Card;