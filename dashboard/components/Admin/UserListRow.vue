<template>
    <tr>
        <td>{{ user.name }}</td>
        <td>{{ user.id }}</td>
        <td>{{ user.description }}</td>
        <td>
            <a class="button is-success">Valid</a>
        </td>
        <td>
        <a class="button is-danger">Delete</a>
        </td>
    </tr>
</template>
<script>
export default {
  name: 'UserListRow',
  props: [ 'user' ]
};
</script>

