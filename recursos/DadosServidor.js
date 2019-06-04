const mediaPost = {

   async loadMedia() {
       try {
         fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/media', {
            method: 'GET'
         })
         .then((response) => response.json())
         .then((responseJson) => {
            console.log(responseJson);
            this.setState({
               media: responseJson
            })
         })
         .catch((error) => {
            console.error(error);
         });
         console.log('media deliciosa: ', this.state.media);
         const value = await media;
         if (value !== null) {
           this.setState({
             media_post: value,
             loading: false
           });
           console.log('deubomProp?',  this.props.media_post);
           console.log('deubomEstado?',  this.state.media_post);
         } else {
           this.setState({
             loading: false
           });
         }
       } catch (error) {
         console.log('AsyncStorage Error: ' + error.message);
       }
     },
   }