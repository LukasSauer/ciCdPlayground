import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Lukas Sauer',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'continuous integration/deployment, pipeline, jenkins'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Jenkins (near future)',
		// What do you want to learn in this workshop? 
		expectations: [
			'setting up & managing a pipeline, what else don\'t I know yet'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'music', 
			'taekwondo',
			'boardgames',
			'videogames',
			'reading', 
		]
	}
});
