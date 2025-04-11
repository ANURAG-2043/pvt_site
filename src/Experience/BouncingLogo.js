// import * as THREE from 'three'

// import Experience from './Experience.js'

// export default class BouncingLogo
// {
//     constructor(macScreenMesh)
//     {
//         this.experience = new Experience()
//         this.resources = this.experience.resources
//         this.scene = this.experience.scene
//         this.world = this.experience.world
//         this.time = this.experience.time
//         this.macScreen = macScreenMesh

//         this.setModel()
//         this.setAnimation()
//     }

//     setModel()
//     {
//         this.model = {}

//         // Create a group for the bouncing logo
//         this.model.group = new THREE.Group()
//         this.scene.add(this.model.group)

//         // Set up the texture
//         this.model.texture = this.resources.items.threejsJourneyLogoTexture
//         this.model.texture.encoding = THREE.sRGBEncoding

//         // Create material for the logo
//         this.model.material = new THREE.MeshBasicMaterial({
//             transparent: true,
//             premultipliedAlpha: true,
//             map: this.model.texture,
//             side: THREE.DoubleSide,
//             depthTest: false
//         })

//         // Create geometry for the logo
//         this.model.geometry = new THREE.PlaneGeometry(1, 0.25)
        
//         // Create mesh and add to group
//         this.model.mesh = new THREE.Mesh(this.model.geometry, this.model.material)
//         this.model.group.add(this.model.mesh)

//         // Position the group at Mac screen
//         this.model.group.position.set(-0.35, 1.4, 0.1)
//         this.model.group.rotation.y = Math.PI * 0.12
//     }

//     update()
//     {
//         this.animations.z += this.animations.speed.z * this.time.delta
//         this.animations.y += this.animations.speed.y * this.time.delta

//         // Apply limits and bounce
//         if(this.animations.z > this.animations.limits.z.max)
//         {
//             this.animations.z = this.animations.limits.z.max
//             this.animations.speed.z *= -1
//         }
//         if(this.animations.z < this.animations.limits.z.min)
//         {
//             this.animations.z = this.animations.limits.z.min
//             this.animations.speed.z *= -1
//         }
//         if(this.animations.y > this.animations.limits.y.max)
//         {
//             this.animations.y = this.animations.limits.y.max
//             this.animations.speed.y *= -1
//         }
//         if(this.animations.y < this.animations.limits.y.min)
//         {
//             this.animations.y = this.animations.limits.y.min
//             this.animations.speed.y *= -1
//         }

//         // Apply animation to the mesh
//         this.model.mesh.position.z = this.animations.z
//         this.model.mesh.position.y = this.animations.y
//     }
// }