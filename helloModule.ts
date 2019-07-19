import angular, {IComponentOptions} from 'angular';

class HelloController {
  public message: string = '';

  messageToUpper() {
    this.message = this.message.toUpperCase();
  }
}

const helloComponent: IComponentOptions = {
  template: `
    <div>
      <input type="text" ng-model="$ctrl.message" />
      <button type="button" ng-click="$ctrl.messageToUpper()">Make Upper</button>
      <hr/>
      {{ $ctrl.message }}
    </div>`,
  bindings: {
    message: '='
  },
  controller: HelloController
};

const helloModule = angular.module('hello', ['ng'])
  .component('helloComponent', helloComponent);

export default helloModule;
