<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <div v-for="item in routes" :key="item">
          <router-link tag="li"  class="nav-item nav-dropdown"  v-if="!item.hidden&&item.children&&item.children.length>0" :to="item.path" disabled>

            <div class="nav-link nav-dropdown-toggle" @click="handleClick">
              <Icon :type="item.icon" color="white"/>{{ item.name}}  
            </div>

            <ul class="nav-dropdown-items">
              <li class="nav-item" v-for="child in item.children" :key="child" v-if='!child.hidden' @click="addActive">
                <router-link :to="child.path+'/'+item.children[0].path" class="nav-link" v-if="!child.hidden&&child.children" >
                  <Icon :type="child.icon" color="white" />{{ child.name}} 
                </router-link> 

                <router-link :to="item.path+'/'+child.path" class="nav-link" v-else="!child.children" >
                  <Icon :type="child.icon"  color="white" /> {{ child.name}} 
                </router-link> 
              </li>
            </ul>
            </router-link>

          <li class="nav-item" v-if="!item.hidden&&!item.children">
            <router-link  :to="item.path" class="nav-link" exact>
              <Icon :type="item.icon" color="white" />{{ item.name}} 
            </router-link>
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    },
    addActive(e){
      e.preventDefault()
      e.target.parentElement.parentElement.parentElement.classList.add('open')
    },
    mounted () {
      console.log(this.routes)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .wscn-icon {
        margin-right: 10px;
    }
    .hideSidebar .menu-indent{
        display: block;
        text-indent: 10px;
    }
</style>
