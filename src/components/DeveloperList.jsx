import React from "react";

const competitors = [
    { sn: 1, name: "Md. Liton Mia", roll: "709763" },
    { sn: 2, name: "Md. Samsuddho Sojib", roll: "709783" },
    { sn: 3, name: "Ashikur Rahman Ovi", roll: "709736" },
    { sn: 4, name: "Millat Sarker Hemel", roll: "709713" },
    { sn: 5, name: "Noirit Roy", roll: "709755" },
    { sn: 6, name: "Md. Al-Amin Islam", roll: "709832" },
    { sn: 7, name: "Md. Aslam Hosen", roll: "709657" },
    { sn: 8, name: "Md. Naibul Hasan", roll: "709664" },
    { sn: 9, name: "Md. Saddat Hossain Miraj", roll: "709750" },
];

const DeveloperList = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                Rangpur Ideal Institute of Technology
            </h2>
            <h3 className="text-lg font-semibold text-center text-gray-600">
                Skill Competition-2025
            </h3>
            <p className="text-center text-gray-500 mb-4">
                Project Name: College Website Front-end Design
            </p>
            <p className="text-center text-gray-600 mb-6">
                Guide Teacher: <span className="font-semibold">Md. Hossen Ali</span>
            </p>

            <div className="overflow-x-auto ">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="border p-2">SN</th>
                            <th className="border p-2">Student Name</th>
                            <th className="border p-2">Student Roll</th>
                        </tr>
                    </thead>
                    <tbody>
                        {competitors.map((competitor, index) => (
                            <tr key={index} className="text-center odd:bg-gray-50">
                                <td className="border p-2">{competitor.sn}</td>
                                <td className="border p-2">{competitor.name}</td>
                                <td className="border p-2">{competitor.roll}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeveloperList;
