define([], function(){
	var apiUrlPath = "https://danivijay.com/dare-machine/service/";
	var apiUrlDataset = apiUrlPath + 'fetch-dataset.php';
	
	function fetchDataset() {
		fetch(apiUrlDataset)
		.then(function(response){
			return response.json();
		}).then(function(data){
			console.log(data);
		})
	}

	return {
		loadMoreRequest: loadMoreRequest
	}
});