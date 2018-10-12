<template>
    <div>
        <section class="container">
            <div>
                <h1 class="subtitle">
                    Admin Page
                
                </h1>

              <a @click="onExportUser" class="button is-dark">Export All Users</a>

                <table class="table table-striped ">
                <thead>
                  <tr>
                    <th>first name</th>
                    <th>last name</th>
                    <th>email</th>
                    <th>Rank</th>

                  </tr>
                </thead>
                <tbody>
                  <UserListRow
                    v-for="user in Users"
                    :key="user.compnos"
                    :user="user"
                    @validate="validateUser"
                    @delete="deleteUser"/>
                </tbody>
              </table>
            </div>
        </section>
    </div>
                  
</template>


<script>
import UserListRow from '@/components/Admin/UserListRow'

export default {
    components: {
      UserListRow
    },
    async fetch ({store}) {
          await store.dispatch('setUsers')
    },
    middleware: 'authAdmin',
    computed: {
      Users () {
        return this.$store.state.users
      }
    },
    methods: {
      validateUser(userId) {
        this.$store.dispatch({
          type: 'validateUser',
          userid: userId
        })
    },
      deleteUser(userId) {
        this.$store.dispatch({
          type: 'deleteUser',
          userid: userId
        })
    },
    onExportUser()
    {
      this.$store.dispatch({
        type: 'exportUsers'
      })
    }
  }
}

</script>
