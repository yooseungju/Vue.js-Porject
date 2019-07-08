import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAOaxPMUrFVZmtPhk945-pku0Vr1_9TkGs",
    authDomain: "webmobile-5.firebaseapp.com",
    databaseURL: "https://webmobile-5.firebaseio.com",
    projectId: "webmobile-5",
    storageBucket: "",
    messagingSenderId: "934123234328",
    appId: "1:934123234328:web:0932bbb6042d5da3"
  };
  // Initialize Firebase


firebase.initializeApp(firebaseConfig);
  
const firestore = firebase.firestore()

export default {
	getPosts(item) {
		let postsCollection
		if(item == "AI"){
			postsCollection = firestore.collection("AI")
		}else if(item == "Bigdata"){
			postsCollection = firestore.collection("Bigdata")

		}else if(item == "Blockchain"){
			postsCollection = firestore.collection("Blockchain")

		}else{
			postsCollection = firestore.collection("webmobile")

		}
		return postsCollection
				.orderBy('created_at', 'desc')
				.get()
				.then((docSnapshots) => {
					return docSnapshots.docs.map((doc) => {
						let data = doc.data()
						data.created_at = new Date(data.created_at.toDate())
						return data
					})
				})
	},
	// postPost(title, body) {
	// 	return firestore.collection(POSTS).add({
	// 		title,
	// 		body,
	// 		created_at: firebase.firestore.FieldValue.serverTimestamp()
	// 	})
	// },
	// getPortfolios() {
	// 	const postsCollection = firestore.collection(PORTFOLIOS)
	// 	return postsCollection
	// 			.orderBy('created_at', 'desc')
	// 			.get()
	// 			.then((docSnapshots) => {
	// 				return docSnapshots.docs.map((doc) => {
	// 					let data = doc.data()
	// 					data.created_at = new Date(data.created_at.toDate())
	// 					return data
	// 				})
	// 			})
	// },
	// postPortfolio(title, body, img) {
	// 	return firestore.collection(PORTFOLIOS).add({
	// 		title,
	// 		body,
	// 		img,
	// 		created_at: firebase.firestore.FieldValue.serverTimestamp()
	// 	})
	// },
	// loginWithGoogle() {
	// 	let provider = new firebase.auth.GoogleAuthProvider()
	// 	return firebase.auth().signInWithPopup(provider).then(function(result) {
	// 		let accessToken = result.credential.accessToken
	// 		let user = result.user
	// 		return result
	// 	}).catch(function(error) {
	// 		console.error('[Google Login Error]', error)
	// 	})
	// }
}