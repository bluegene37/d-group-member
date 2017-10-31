<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-3 text-center">About Us</h1>
            <p class="lead text-center">D-Group in Bacolod</p>
            <h2 class="text-center">Members</h2>

                <table class="table table-striped table-inverse">
                <thead>
                    <tr class="bg-primary">
                    <th>id #</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Alias</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  class="border border-white" v-for="allmember in allmembers">
                    <th scope="row">{{allmember.id}}</th>
                    <td>{{allmember.fname}}</td>
                    <td>{{allmember.lname}}</td>
                    <td>{{allmember.name}}</td>
                    </tr>
                </tbody>
                </table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: mapGetters({
        allmembers: 'AllMember',
    })
}
</script>
