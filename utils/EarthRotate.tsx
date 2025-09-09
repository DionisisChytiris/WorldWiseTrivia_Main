import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { GLView } from "expo-gl";
import { Renderer, TextureLoader } from "expo-three";
import {
  Scene,
  PerspectiveCamera,
  SphereGeometry,
  MeshPhongMaterial,
  Mesh,
  DirectionalLight,
  AmbientLight,
  BufferGeometry,
  PointsMaterial,
  Points,
  Float32BufferAttribute,
  Color,
} from "three";

const { width, height } = Dimensions.get("window");

// export default function EarthScreen() {
export default function EarthRotate() {
  const [isLoading, setIsLoading] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const createStarField = () => {
//     const geometry = new BufferGeometry();
//     const vertices = [];

//     for (let i = 0; i < 1000; i++) {
//       const x = (Math.random() - 0.5) * 2000;
//       const y = (Math.random() - 0.5) * 2000;
//       const z = (Math.random() - 0.5) * 2000;
//       vertices.push(x, y, z);
//     }

//     geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));

//     const material = new PointsMaterial({
//       color: 0xffffff,
//       size: 2,
//       sizeAttenuation: false,
//     });

//     return new Points(geometry, material);
//   };

  const onContextCreate = async (gl: any) => {
    const {
      drawingBufferWidth: screenWidth,
      drawingBufferHeight: screenHeight,
    } = gl;

    // Create renderer
    const renderer = new Renderer({ gl });
    renderer.setSize(screenWidth, screenHeight);
    // renderer.setClearColor(new Color(0x000011));

    // Create scene
    const scene = new Scene();

    // Create camera
    const camera = new PerspectiveCamera(
      75,
      screenWidth / screenHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Add starfield
    // const stars = createStarField();
    // scene.add(stars);

    // Create Earth geometry
    const geometry = new SphereGeometry(1, 64, 64);

    // Load Earth texture
    const textureLoader = new TextureLoader();
    let earthTexture;

    try {
      // Using NASA's flat Earth projection for realistic Earth visualization
      earthTexture = await textureLoader.loadAsync(
        require('../assets/worldmap.jpg')
        // "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
      );

      // Configure texture for proper sphere wrapping
      earthTexture.wrapS = 1000; // RepeatWrapping
      earthTexture.wrapT = 1001; // ClampToEdgeWrapping
      earthTexture.flipY = true;
      earthTexture.offset.set(0, 0);
      earthTexture.repeat.set(1, 1);
    } catch (error) {
      console.warn("Failed to load Earth texture, using default material");
    }

    // Create Earth material
    const material = new MeshPhongMaterial({
      map: earthTexture || undefined,
      color: 0xffffff,
      shininess: 300,
      transparent: false,
    });

    // Create Earth mesh
    const earth = new Mesh(geometry, material);
    scene.add(earth);

    // Add lighting
    const ambientLight = new AmbientLight(0x404040, 1.0);
    scene.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 3);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    setIsLoading(false);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate Earth
      earth.rotation.y += 0.01;

      // Slowly rotate stars
    //   stars.rotation.y += 0.00001;

      // Render scene
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    animate();
  };

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a timeout to hide loading state if texture takes too long
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
     
      <GLView style={styles.glView} onContextCreate={onContextCreate} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#1111cc",
  },
  glView: {
    width: 300,
    height: 300
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#a2a2db",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  loadingText: {
    color: "#60a5fa",
    fontSize: 18,
    fontWeight: "600",
  },
  info: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  infoText: {
    color: "#9ca3af",
    fontSize: 12,
    textAlign: "center",
    backgroundColor: "rgba(15, 15, 35, 0.8)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
});
