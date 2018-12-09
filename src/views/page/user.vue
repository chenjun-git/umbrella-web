<template>
  <div>
    <Button type="primary">删除用户</Button>
    <Row :gutter="16">
      <Col span="4">
        
      </Col>
      <Col span="4">

      </Col>
      <Col span="8">
        <Input suffix="ios-search" placeholder="Enter text"/>
      </Col>
    </Row>
    <br>

    <Table :columns="columns" :data="data"></Table>
    <br>

    <Page :total="userTotal" :page-size="pageCount" @on-change="handlePage" @on-page-size-change='handlePageSize'/>
  </div>
</template>

<script>
export default {
	name: "user-manager",
	data () {
	  return {
	    userTotal: 1000,
	    pageCount: 20,
	    columns: [
	      {
            type: 'selection',
            width: 60,
            align: 'center'
          },
	      {
	        title: '用户名',
	        key: 'name'
	      },
	      {
	        title: '邮箱',
	        key: 'name'
	      },
	      {
	        title: '电话',
	        key: 'name'
	      },
	      {
	        title: '年龄',
	        key: 'name'
	      },
	      {
	        title: '注册来源',
	        key: 'name'
	      },
	      {
	        title: '注册时间',
	        key: 'name'
	      },
	      {
	        title: '最后登录时间',
	        key: 'name'
	      },
	      {
	        title: '会员时长',
	        key: 'name'
	      },
	      {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
                return h('div', [
                    h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                this.show(params.index)
                            }
                        }
                    }, 'View'),
                    h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        on: {
                            click: () => {
                                this.remove(params.index)
                            }
                        }
                    }, 'Delete')
                ]);
            }
          }
        ],
		data: [
		    {
		        name: 'John Brown',
		        age: 18,
		        address: 'New York No. 1 Lake Park',
		        date: '2016-10-03'
		    },
		    {
		        name: 'Jim Green',
		        age: 24,
		        address: 'London No. 1 Lake Park',
		        date: '2016-10-01'
		    },
		    {
		        name: 'Joe Black',
		        age: 30,
		        address: 'Sydney No. 1 Lake Park',
		        date: '2016-10-02'
		    },
		    {
		        name: 'Jon Snow',
		        age: 26,
		        address: 'Ottawa No. 2 Lake Park',
		        date: '2016-10-04'
		    },
		]
	  }
	},

	mounted () {
	  // 获取用户总数
	  this.pageCount = 10
	  this.$store.dispatch('GetUsersTotal').then((res) => {
	    const userNum = res
	    const pageinfo = {
	      offset: 0,
	      pagecount: this.pageCount,
	    }
	    // 设置store中用户总数
	    this.userTotal = userNum
	    this.$store.commit('SET_USER_TOTAL', userNum)
	    // 获取第一页用户数据
	    this.$store.dispatch('GetUsersInfo', { pageinfo }).then((res) => {
	      // 显示用户数据
	    }).catch((err) => {
	      this.$Message.error(err)
	    })
	  }).catch((err) => {
	    this.$Message.error(err)
	  })
	},

	methods: {
      handlePage (pageNum) {
        const pageinfo = {
	      offset: 10*(pageNum-1),
	      pagecount: this.pageCount,
	    }
	    // 获取一页用户数据
	    this.$store.dispatch('GetUsersInfo', { pageinfo }).then((res) => {
	      // 显示用户数据
	    }).catch((err) => {
	      this.$Message.error(err)
	    })
      }, 

      handlePageSize (pageNum) {
      },

      remove (index) {
        this.data.splice(index, 1);
      }
	}
}
</script>