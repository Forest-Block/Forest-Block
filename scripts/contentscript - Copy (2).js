// 净网行动, 从我做起



// 清除百毒相关
function clearBaidu(){
  const removeList = [
    'content_right', 'u1', 's_top_wrap', 's_upfunc_menus', 's_wrap', 's_tab_inner', 'head_nums_cont_outer',
    'rs', 'u', 'foot', 'ftCon', 'qrcode', 'rs_top_new', 'bdsug', 's_tab', 'bottom_layer', 'u_sp'
  ];
  let style = document.createElement('style');
  let str = '';
  
  for (let i in removeList) {
    let z = removeList[i];
    if (z === 's_tab'){
      str += `
        #${z}{visibility:hidden!important;opacity: 0!important}
      `;
    }else{
      str += `
        #${z}{display:none!important;opacity: 0!important}
        .${z}{display:none!important;opacity: 0!important}
      `;
    }
  }
  let textNode = document.createTextNode(str);
  style.appendChild(textNode);
  document.head.appendChild(style);

  let list = document.querySelectorAll('.result-op')
  let list1 = document.querySelectorAll('.c-container')
  if (list || list1) {
    let keys = [
      '制服丝袜'
    ];
    let newArr = [list, list1];
    # every .result-op 
    for (let i in newArr) {
      newArr[i].forEach(item => {
        for (let i in keys) {
          console.log("The item.innerText",item.innerText)
          if (item.innerText.includes(keys[i])) {
            item.remove();
          }
        }
      })
    }
  };
}
alert("x")
//监听dom变化, 然后干掉百毒
let targetNode = document.getElementById('wrapper_wrapper');
if (targetNode){
  
  let config = { attributes: true, childList: true, subtree: true };
  let callback = function (mutationsList) {
    mutationsList.forEach(function (item, index) {
      if (item.type == 'childList') {
        clearBaidu();
      } else if (item.type == 'attributes') {
        clearBaidu();
      }
    });
  };
  let observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}
