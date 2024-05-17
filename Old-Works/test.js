
{/* <script>
$(document).ready(function(){
  $("elementor-repeater-item-531952e").click(function(){
    $(".bias-dubai").addClass("bias-active");
        $(".bias-dubai").removeClass("bias-dubai3");
        $(".bias-lebanon, .bias-iraq, .bias-egypt, .bias-algeria, .bias-jordan").addClass("bias-dubai3");
  });

    $(".elementor-repeater-item-61270a8").click(function(){
    $(".bias-dubai, .bias-lebonan, .bias-iraq, .bias-egypt, .bias-algeria, .bias-jordan").removeClass("bias-active");
        $(".bias-lebanon").removeClass("bias-dubai3");
    $(".bias-lebanon").addClass("bias-active");
        $(".bias-dubai, .bias-iraq, .bias-egypt, .bias-algeria, .bias-jordan").addClass("bias-dubai3");
  });

    $(".elementor-repeater-item-3f9d853").click(function(){
    $(".bias-dubai, .bias-lebonan, .bias-iraq, .bias-egypt, .bias-algeria, .bias-jordan").removeClass("bias-active");
        $(".bias-iraq").removeClass("bias-dubai3");
    $(".bias-iraq").addClass("bias-active");
        $(".bias-dubai, .bias-lebanon, .bias-egypt, .bias-algeria, .bias-jordan").addClass("bias-dubai3");
  });

      $(".elementor-repeater-item-b16e4e5").click(function(){
    $(".bias-dubai, .bias-lebonan, .bias-iraq, .bias-egypt, .bias-algeria, .bias-jordan").removeClass("bias-active");
        $(".bias-egypt").removeClass("bias-dubai3");
    $(".bias-egypt").addClass("bias-active");
        $(".bias-dubai, .bias-lebanon, .bias-iraq, .bias-algeria, .bias-jordan").addClass("bias-dubai3");
  });

        $(".elementor-repeater-item-433f719").click(function(){
    $(".bias-dubai, .bias-lebonan, .bias-iraq, .bias-egypt, .bias-algeria, .bias-jordan").removeClass("bias-active");
        $(".bias-algeria").removeClass("bias-dubai3");
    $(".bias-algeria").addClass("bias-active");
        $(".bias-dubai, .bias-lebanon, .bias-iraq, .bias-egypt, .bias-jordan").addClass("bias-dubai3");
  });

          $(".elementor-repeater-item-d1f2684").click(function(){
    $(".bias-dubai, .bias-lebonan, .bias-iraq, .bias-egypt, .bias-algeria, .bias-jordan").removeClass("bias-active");
        $(".bias-jordan").removeClass("bias-dubai3");
    $(".bias-jordan").addClass("bias-active");
        $(".bias-dubai, .bias-lebanon, .bias-iraq, .bias-egypt, .bias-algeria").addClass("bias-dubai3");
  });
});
</script> */}




<script>
$(document).ready(function(){

    const removeClass = () => {
        return $(".bias-dubai, .bias-lebonan, .bias-iraq, .bias-egypt, .bias-algeria, .bias-jordan").removeClass("bias-active");
    }
    
    $(".elementor-repeater-item-531952e").click(function(){
    $(".bias-dubai").addClass("bias-active");
    $(".bias-lebanon, .bias-iraq, .bias-egypt, .bias-algeria, .bias-jordan").removeClass("bias-active");
    
  });

    $(".elementor-repeater-item-61270a8").click(function(){
    removeClass();
    $(".bias-lebanon").addClass("bias-active");

  });
  
    $(".elementor-repeater-item-3f9d853").click(function(){
    $(".bias-dubai, .bias-lebanon, .bias-iraq, .bias-egypt, .bias-algeria, .bias-jordan").removeClass("bias-active");
    $(".bias-iraq").addClass("bias-active");
 
  });
  
    $(".elementor-repeater-item-b16e4e5").click(function(){
    $(".bias-dubai, .bias-lebanon, .bias-iraq, .bias-egypt, .bias-algeria, .bias-jordan").removeClass("bias-active");
    $(".bias-egypt").addClass("bias-active");
 
  });

    $(".elementor-repeater-item-433f719").click(function(){
    $(".bias-dubai, .bias-lebanon, .bias-iraq, .bias-egypt, .bias-algeria, .bias-jordan").removeClass("bias-active");
    $(".bias-algeria").addClass("bias-active");
 
  });

    $(".elementor-repeater-item-d1f2684").click(function(){
    $(".bias-dubai, .bias-lebanon, .bias-iraq, .bias-egypt, .bias-algeria, .bias-jordan").removeClass("bias-active");
    $(".bias-jordan").addClass("bias-active");
 
  });
});
</script>