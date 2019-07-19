import angular, {ICompileService, IRootScopeService} from 'angular';
import helloModule from './helloModule';

const $injector = angular.injector([helloModule.name]);

$injector.invoke(($compile: ICompileService, $rootScope: IRootScopeService) => {
  const template = `<hello-component message="'Hello, AngularJS~'"></hello-component>`;
  const $dom = $compile(template)($rootScope)

  // $rootScope.$digest() is not necessary for components
  // $rootScope.$digest();

  document.getElementById('main')!.appendChild($dom[0]);
})
