<script>
        function testA()
        {
                var box1= document.getElementById("section1");
                var box2= document.getElementById("section2");
                box2.style.display="none";
            if(box1.style.display=="none"){
                box1.style.display="block";
                box2.style.display="none";
            }

        }

   function testb() {
 
          var box1= document.getElementById("section2");
          var box2= document.getElementById("section1");
          
          box2.style.display="none";
          box1.style.display="block";


      if(box1.style.display=="none"){
          box1.style.display="block";
          box2.style.display="none";

      }

  }
</script>