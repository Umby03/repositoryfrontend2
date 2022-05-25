<script lang="ts">

let results = [];

$:{
		if (typeof localStorage != 'undefined') {
			fetch('http://192.168.114.55:8080/tournament/search', {
				method: 'post',

				headers: {
					'content-type': 'application/json',
					authorization: localStorage.getItem('token')
				}
			})
				.then((resp) => resp.json())
				.then((json) => {
					results = json;
				});
		}
	}

</script>