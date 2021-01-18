const Mock = require('mockjs');

Mock.mock(`/api/courseSet/getTalentDocument`, {
  version: [
    {
      id: 0,
      ver: 1999
    },
    {
      id: 1,
      ver: 1991
    },
    {
      id: 2,
      ver: 1993
    },
    {
      id: 3,
      ver: 2020
    },],
  department: [
    {
      id: 0,
      className: '[2007]信息工程学院'
    },
    {
      id: 1,
      className: '[2007]信息工程学院'
    },
    {
      id: 2,
      className: '[2007]信息工程学院'
    },
    {
      id: 3,
      className: '[2007]信息工程学院'
    },
    {
      id: 4,
      className: '[2007]信息工程学院'
    }
  ]
})

export default Mock
