import { useGLTF, useTexture } from "@react-three/drei";

const ComputerHome = (props) => {
  const { nodes, materials } = useGLTF("/public/scene.glb");

  const texture = useTexture("/public/textures/texture.png");
  const normalMap = useTexture("/public/textures/bg3.jpg");

  return (
    <group {...props} dispose={null}>
      <group scale={0.05}>
        <group
          position={props.position}
          rotation={props.rotation}
          scale={props.scale}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_digital_displays_0.geometry}
            material={materials.digital_displays}
          >
            <meshStandardMaterial map={texture} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          >
            <meshStandardMaterial map={texture} />{" "}
          </mesh>
        </group>
        <group
          position={[0, 381.812, -82.657]}
          rotation={[-0.229, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_displays_0.geometry}
            material={materials.digital_displays}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          >
            <meshStandardMaterial map={normalMap} />
          </mesh>
        </group>
        <group
          position={[0, 0, -94.762]}
          rotation={[0, Math.PI / 2, 0]}
          scale={123.801}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_metal_2_0.geometry}
            material={materials.metal_2}
          >
            <meshStandardMaterial map={texture} />{" "}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_metal_1_0.geometry}
            material={materials.metal_1}
          >
            <meshStandardMaterial map={texture} />
          </mesh>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/public/scene.glb");

export default ComputerHome;
