(function(){
    'use strict';

    angular
        .module('app')
        .controller('TaskController', TaskController);
        
    function TaskController(){
        var vm = this;

        vm.addTasks = addTasks; 
        vm.clearCompleted = clearCompleted;
        vm.tasks = [];

        function addTasks() {
            vm.tasks.push(
                {title: vm.newTask, taskDone:false}
                )
            vm.newTask = '';
        };
        
        function clearCompleted(){
            vm.tasks = vm.tasks.filter(function(item){
                return !item.taskDone; //returns all 'taskDone': false, ie not been check marked
            })      
        };
    };
})();