import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



var firebaseConfig = {
    apiKey: "AIzaSyAOaxPMUrFVZmtPhk945-pku0Vr1_9TkGs",
    authDomain: "webmobile-5.firebaseapp.com",
    databaseURL: "https://webmobile-5.firebaseio.com",
    projectId: "webmobile-5",
    storageBucket: "",
    messagingSenderId: "934123234328",
    appId: "1:934123234328:web:0932bbb6042d5da3"
  };



firebase.initializeApp(firebaseConfig);
  
const firestore = firebase.firestore()


export default {
	// uploadImg(item, imageName, imageFile, title, content){
		
	// 	let storageRef = firebase.storage().ref()
	// 	let mountainsRef = storageRef.child(`Post/${item}/${imageName}`)
	
	// 	mountainsRef.put(imageFile)
	// 			.then(snapshot => {
	// 				snapshot.ref.getDownloadURL()
	// 				.then(downloadURL => {
	// 					console.log(downloadURL);
	// 					this.postPost(item ,title, content, downloadURL)
						
	// 		});
	// 	});
	// },
	
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
	postPost(item ,title, content,img) {
		return firestore.collection(item).add({
			img,
			title,
			content,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
	},

	getPortfolios() {
		const postsCollection = firestore.collection("Portfolios")
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
	postPortfolio(title, content, img) {
		return firestore.collection("Portfolios").add({
			title,
			content,
			img,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
	},
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