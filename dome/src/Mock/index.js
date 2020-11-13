import Mock from 'mockjs'

Mock.mock('/api/list',{
    code:200,
    'data|5':[{
        name:'@cname(2)',
        img:'@image(100x100,@color)',
        id:'@id'
    }]
})