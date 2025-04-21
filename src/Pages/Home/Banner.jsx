import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ParticleBg from "../../Particles/ParticleBg";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect, useRef } from "react";
import Bottomline from "../../Components/BottomLine/Bottomline";

const Banner = () => {
    const navigate = useNavigate();
    const threeRef = useRef(null);

    useEffect(() => {
        const canvas = threeRef.current;
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
        camera.position.set(0, 2, 5);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;

        // Example geometry: rotating torus knot
        const geometry = new THREE.TorusKnotGeometry(1.5, 0.4, 150, 20);
        const material = new THREE.MeshNormalMaterial();
        const knot = new THREE.Mesh(geometry, material);
        scene.add(knot);

        const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
        scene.add(light);

        const animate = () => {
            controls.update();
            renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <div className="relative z-0 bg-gradient-to-r from-[#1a041f] to-[#05000a] h-screen flex items-center overflow-hidden">
            {/* 3D Canvas Background */}
            <canvas ref={threeRef} className="fixed inset-0 w-full h-full object-cover" />

            {/* Star Particles Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <ParticleBg />
            </div>

            {/* Foreground Content */}
            <motion.div
                className="relative z-20 text-center text-white mx-auto max-w-4xl px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                    Welcome to <span className="text-[#6d32eb]">Ananta</span> Technologies
                </h1>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mx-auto w-24 mt-4"
                >
                    <Bottomline />
                </motion.div>
                <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                        Empowering your business with cutting-edge solutions 🚀
                    </span>
                </p>
                <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                    We provide innovative web and software solutions tailored for startups, SMBs, and enterprises. Our expert team leverages the latest technologies to drive digital transformation and business growth.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                    <button
                        className="px-8 py-3 bg-gradient-to-r from-[#915EFF] to-purple-600 text-white rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
                        onClick={() => navigate("/contact-page")}
                    >
                        Get Started
                    </button>
                    <button
                        className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                        onClick={() => navigate("/learn-more")}
                    >
                        Learn More
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;