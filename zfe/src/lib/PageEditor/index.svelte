<script>
	import PageEditor from "./PageEditor.svelte";
</script>



<svelte:head>
	<title>Page Editor</title>
	<!-- <link -->
	<!-- 	rel="stylesheet" -->
	<!-- 	href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" -->
	<!-- /> -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
          }
        }
      }
    }
  </script>

	<link rel="stylesheet" href="//unpkg.com/grapesjs/dist/css/grapes.min.css" />
	<!-- <link rel="stylesheet" href="https://studio.grapesjs.com/static/css/main.967a41b9.css" /> -->
	<!-- <link rel="stylesheet" href="https://grapesjs.com/stylesheets/grapesjs-preset-webpage.min.css" /> -->
	<!-- <link rel="stylesheet" href="https://grapesjs.com/stylesheets/demos.css" /> -->
	<!-- <link href="https://unpkg.com/grapesjs@0.21.7/dist/css/grapes.min.css" rel="stylesheet"> -->

	<!-- <link rel="stylesheet" href="https://grapesjs.com/stylesheets/tooltip.css" /> -->
	<!-- <link href="https://unpkg.com/grapick/dist/grapick.min.css" rel="stylesheet" /> -->
</svelte:head>


<PageEditor />
