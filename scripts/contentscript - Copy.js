// 净网行动, 从我做起
// 把百毒相关的全部干掉, 
// 宁可错杀一千,绝不放过一个
//location.host === "www.baidu.com" && clearBaidu();
let keys = [];
    
chrome.storage.sync.get({blockWords: []}, function(items) {
        //console.log("content storage",items.blockWords);
        keys=items.blockWords;
        });

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
  //alert('x')
  let list = document.querySelectorAll('.result-op')
  let list1 = document.querySelectorAll('.c-container')
  let list2 = document.querySelectorAll('.vrwrap')
  let list3 = document.querySelectorAll('.rb')
  
  //console.log("list2",list2)
  if (list || list1||list2||list3) {
    
 
    let newArr = [list, list1,list2,list3];
    //console.log("newArr",newArr)
    
    for (let i in newArr) {
      newArr[i].forEach(item => {
        for (let i in keys) {
          //console.log("item.innerText.",item.innerText)
          if (item.innerText.includes(keys[i])) {
            //window.history.back(-1);
            window.location.href="http://www.veg001.com/";
          }
          
        }
      })
    }
  };//if
}

//监控搜索框
function  monitor_querybox(){
  //console.log("monitor_querybox",monitor_querybox)
  let list=document.querySelectorAll('.querybox')
  if (list) {
    
 
    let newArr = [list];
    
    
    for (let i in newArr) {
      newArr[i].forEach(item => {
        for (let i in keys) {
          //console.log("item.innerText.",item.innerText)
          if (item.innerText.includes(keys[i])) {
            window.location.href="http://www.veg001.com/";
          }
          
        }
      })
    }
  };

}
//alert("xx")
//监听dom变化, 然后干掉百毒
let targetNode = document.getElementById('wrapper_wrapper');
//console.log("targetNode",targetNode);
let sogou_targetNode=document.getElementById('main');
let sougu_query_box=document.getElementById('querybox_up');

//console.log("sogou_targetNode",sogou_targetNode);
//console.log("sougu_query_box",sougu_query_box);
//baidu
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
};
//sougou
if (sogou_targetNode){
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
  observer.observe(sogou_targetNode, config);
};
if (sougu_query_box){
  let config = { attributes: true, childList: true, subtree: true };
  let callback = function (mutationsList) {
    mutationsList.forEach(function (item, index) {
      if (item.type == 'childList') {
        monitor_querybox();
      } else if (item.type == 'attributes') {
        monitor_querybox();
      }
    });
  };
  let observer = new MutationObserver(callback);
  observer.observe(sogou_targetNode, config);
};

