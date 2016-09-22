angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.toolContainerBottom = 55;  //用于保存最开始toolContainerBottom的位置和每次拖拽之后的位置
  $scope.toolContainerRight = 5;
  $scope.showSmallTool = false;
  $scope.clickSmallTool = function(){
    $scope.showSmallTool = !$scope.showSmallTool;
  };
  $scope.moveTool = function($event){
    var toolContainer = document.getElementsByClassName('tool-container')[0];
    var smallTools = document.getElementsByClassName('small-tool');
    var toolContainerBottom = ($scope.toolContainerBottom - $event.gesture.deltaY);  //通过保存的位置和拖拽的偏移量求出拖拽之后的位置,通过DOM操作移动
    var toolContainerRight = ($scope.toolContainerRight  - $event.gesture.deltaX);
    toolContainer.setAttribute('style', 'right:'+ (toolContainerRight)  +'px; bottom:'+ (toolContainerBottom) +'px');
    for(var i = 0; i < smallTools.length; i++){   //同时移动小球
      smallTools[i].setAttribute('style', 'bottom:'+ 5 +'px;right:'+ 5 +'px');
    }
  };
  $scope.onRelease = function(){
    var toolContainer = document.getElementsByClassName('tool-container')[0];
    $scope.toolContainerBottom = parseFloat(toolContainer.style.bottom);
    $scope.toolContainerRight = parseFloat(toolContainer.style.right);
  };
  $scope.smallToolStyles = [{
    'transform':'translateY(-80px)',
    'width':'40px',
    'height':'40px',
    'line-height':'40px',
    'top':'0',
    'left':'0',
    'transition': 'transform 0.3s'
  },{
    'transform':'translate(-'+(40 * Math.sqrt(2))+'px, -'+(40 * Math.sqrt(2))+'px)',
    'width':'40px',
    'height':'40px',
    'line-height':'40px',
    'top':'0',
    'left':'0',
    'transition': 'transform 0.3s'
  },{
    'transform':'translateX(-80px)',
    'width':'40px',
    'height':'40px',
    'line-height':'40px',
    'top':'0',
    'left':'0',
    'transition': 'transform 0.3s'
  },{
    'transform':'translate(-'+(40 * Math.sqrt(2))+'px, '+(40 * Math.sqrt(2))+'px)',
    'width':'40px',
    'height':'40px',
    'line-height':'40px',
    'top':'0',
    'left':'0',
    'transition': 'transform 0.3s'
  },{
    'transform':'translateY(80px)',
    'width':'40px',
    'height':'40px',
    'line-height':'40px',
    'top':'0',
    'left':'0',
    'transition': 'transform 0.3s'
  }];

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
