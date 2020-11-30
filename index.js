import sequentialEntrance from "./sequentialEntrance.js";

const install = app => {
	app.component(sequentialEntrance.name, sequentialEntrance)
}

sequentialEntrance.install = install

export default sequentialEntrance
