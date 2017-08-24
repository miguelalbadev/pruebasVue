// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//var data = {counter:0}

var boton = Vue.component('my-component',{
	  template: '<button v-on:click="counter += 1">{{ counter }}</button>',

	  data:function(){
	  	return {counter:0}
	  }
})

var hola = Vue.component('my-component',{
	  props:['mensaje'],
	  template: '<div>Hola Mundo!{{mensaje}}</div>'
})

var texto = Vue.component('child',{
	props:['myMessage'],
	template:'<h2>{{ myMessage }}</h2>'
})

new Vue({
	el:'#app',
	components:{
		'my-component':hola

	}
})

new Vue({
	el:'#app2'
	
	
})

