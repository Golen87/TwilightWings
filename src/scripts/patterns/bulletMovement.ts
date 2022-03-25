import { BulletMovement } from "../interfaces";


// Creates a straight movement parametric function
function straightMovement(): BulletMovement {
	return (bullet, time, p) => {
		return {
			x: p.originX + p.offsetX + p.facingX * p.speed * time,
			y: p.originY + p.offsetY + p.facingY * p.speed * time
		};
	};
}

// Creates a slowly accelerating movement parametric function
function acceleratedMovement(slowness: number): BulletMovement {
	return (bullet, time, p) => {
		let speed = p.speed * Math.exp(-slowness/time); // Smooth 0 -> 1
		return {
			x: p.originX + p.offsetX + p.facingX * speed * time,
			y: p.originY + p.offsetY + p.facingY * speed * time
		};
	};
}

// Creates a straight movement parametric function
function shapeMovement(rotation: number): BulletMovement {
	return (bullet, time, p) => {
		let radius = p.offsetRadius * Math.exp(-0.25/time);
		let angle = p.offsetAngle + rotation * time; // Rotation
		let speed = p.speed * Math.exp(-4/time); // Smooth 0 -> 1
		return {
			x: p.originX + radius * Math.cos(angle) + p.facingX * speed * time,
			y: p.originY + radius * Math.sin(angle) + p.facingY * speed * time
		};
	};
}

function playerMovement(offset: number): BulletMovement {
	return (bullet, time, p) => {
		let dx = offset * Math.exp(-0.1/time);
		let speed = p.speed * Math.exp(-0.25/time); // Smooth 0 -> 1
		return {
			x: p.originX + p.facingX * speed * time + dx,
			y: p.originY + p.facingY * speed * time
		};
	};
}


export {
	straightMovement,
	acceleratedMovement,
	shapeMovement,
	playerMovement,
}