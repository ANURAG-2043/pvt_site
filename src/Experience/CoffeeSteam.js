import * as THREE from 'three'

import Experience from './Experience.js'
import vertexShader from './shaders/coffeeSteam/vertex.glsl'
import fragmentShader from './shaders/coffeeSteam/fragment.glsl'

export default class CoffeeSteam
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene
        this.time = this.experience.time

        this.setModel()
    }

    setModel()
    {
        this.model = {}
        
        // Fixed color value
        this.model.color = '#d2958a'

        // Material with fixed values
        this.model.material = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            vertexShader,
            fragmentShader,
            uniforms:
            {
                uTime: { value: 0 },
                uTimeFrequency: { value: 0.0010 },  // Fixed optimal value
                uUvFrequency: { value: new THREE.Vector2(6, 5) },  // Fixed optimal values
                uColor: { value: new THREE.Color(this.model.color) }
            }
        })

        // Mesh
        this.model.mesh = this.resources.items.coffeeSteamModel.scene.children[0]
        this.model.mesh.material = this.model.material
        this.scene.add(this.model.mesh)
    }

    update()
    {
        this.model.material.uniforms.uTime.value = this.time.elapsed
    }
}