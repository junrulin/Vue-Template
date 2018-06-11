import Mock from 'mockjs';
import {MockTemplate} from './mock.template';

Mock.setup();

Object.keys(MockTemplate).forEach((key) => {
  let rule = MockTemplate[key];
  let matcher = rule.matcher;
  let template = rule.template;
  let method = rule.method;
  if (method) {
    Mock.mock(matcher, method, template);
  } else {
    Mock.mock(matcher, template);
  }
})
