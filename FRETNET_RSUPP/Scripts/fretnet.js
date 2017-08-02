$(document).ready(function () {
    
    if ($('.infomsg').hasClass('greenBack') || $('.infomsg').hasClass('redBack'))
        $('.infomsg').show(1000);
    $("input[id*='datetimepicker'").datetimepicker({
      format:'d/m/Y H:i',
      lang:'fr',
      step:5,
  });
  $(".imgPicker").click(function () {
      $(this).prev('input').datetimepicker('show');
  });
  $('.loginIcone').unbind('click').bind('click', function(){
      if($(this).next().hasClass("open")){
        $(this).next().slideUp('fast');
        $(this).next().removeClass('open');
      }else{
        $(this).next().slideDown('fast');
        $(this).next().addClass('open');
      }
    });
    $('input.m-wrap, textarea.m-wrap').css('width','');
    $(".objContext a").contextMenu({ menu: 'myMenu' }, function(action, el, pos) { contextMenuWork(action, el, pos); });
//  $("input[id*='datetimepicker'").next('img').click(function () {
//      $(this).prev('input').datetimepicker('show');
//  });

});
function pageLoad(sender, args) {
        var manager = Sys.WebForms.PageRequestManager.getInstance();
        manager.add_endRequest(endRequest);
        //manager.add_beginRequest(OnBeginRequest);
    }

    function endRequest(sender, args) {
        $("input[id*='datetimepicker'").datetimepicker({
            format: 'd/m/Y H:i',
            lang: 'fr'
        });
        $(".imgPicker").click(function () {
      $(this).prev('input').datetimepicker('show');

  });
  if($("#loginDetail").hasClass("open")){
            $("#loginDetail").slideDown('fast');
        }
  $('.loginIcone').unbind('click').bind('click', function(){
      if($(this).next().hasClass("open")){
        $(this).next().slideUp('fast');
        $(this).next().removeClass('open');
      }else{
        $(this).next().slideDown('fast');
        $(this).next().addClass('open');
      }
    });
    $('input.m-wrap, textarea.m-wrap').css('width','');
    $(".objContext a").contextMenu({ menu: 'myMenu' }, function(action, el, pos) { contextMenuWork(action, el, pos); });
}

function contextMenuWork(action, el, pos) 
{
    switch (action) 
    {
        case "delete":
            {
                break;
            }
        case "insert":
            {
//                eval("<%=serversideEvent%>");
                var a = decodeURI($(el).attr('href'));
                var indexBegin = a.indexOf("(");
                var indexEnd = a.lastIndexOf(")");
                var IDArea = a.substr(indexBegin+1, indexEnd - indexBegin - 1);
                __doPostBack(IDArea);
//                alert(IDArea);
//Partial update in javascript not postback
                break;
            }

        case "list":
            {
                var a = $(el).attr('href');
                var IDArea = a.split(",");
                if(IDArea.length>1)
                {
                    var elmIDs = IDArea[1].substr(2, IDArea[1].lastIndexOf("'")-2);
                    var tabelmIDs = elmIDs.split("\\");
                    if(tabelmIDs.length>1){
                        $("span[id*='hdnObjID']").val(tabelmIDs[tabelmIDs.length-1]);
                    }else
                        $("span[id*='hdnObjID']").val(elmIDs);
                    //alert($("span[id*='hdnObjID']").val());
                }
                break;
            }
    }
}