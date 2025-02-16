import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FaUser, FaEye, FaTwitch } from "react-icons/fa";

const Overlay = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white font-bold">
      {/* Kamera */}
      <motion.div
        className="absolute bottom-10 left-10 w-60 h-40 border-4 border-purple-500 rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          Kamera
        </div>
      </motion.div>

      {/* Chat */}
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-40 bg-gray-900 border-4 border-purple-500 rounded-xl p-2 overflow-y-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-purple-400">Chat</p>
      </motion.div>

      {/* Ostatni sub/donacja */}
      <Card className="absolute top-10 left-10 p-2 bg-gray-900 border-4 border-purple-500 flex items-center gap-2">
        <FaUser className="text-purple-400" /> Ostatni sub: <span className="text-purple-300">Nick</span>
      </Card>
      <Card className="absolute top-10 left-64 p-2 bg-gray-900 border-4 border-purple-500 flex items-center gap-2">
        <FaTwitch className="text-purple-400" /> Ostatnia donacja: <span className="text-purple-300">$5.00</span>
      </Card>

      {/* Licznik widzów */}
      <Card className="absolute top-10 right-10 p-2 bg-gray-900 border-4 border-purple-500 flex items-center gap-2">
        <FaEye className="text-purple-400" /> Widzowie: <span className="text-purple-300">120</span>
      </Card>

      {/* Mini mapa/statystyki */}
      <motion.div
        className="absolute bottom-60 right-10 w-40 h-40 bg-gray-900 border-4 border-purple-500 rounded-xl flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mini Mapa
      </motion.div>
    </div>
  );
};

export default Overlay;

