<template>
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <div class="panel panel-default">
                    <br>
                    <br>
                    <div class="panel-heading"><h1 class="text-center" >Login</h1></div>
                    <div class="panel-body">
                        <form class="form-horizontal" role="form">

                            <div class="form-group" :class="{'has-error' : errorsUsername}">
                                <label for="email" class="col-md control-label">User Name</label>

                                <div class="col-md">
                                    <input id="username" type="email" class="form-control" name="username" v-model="loginDetails.username" required autofocus>

                                    <span v-if="errorsUsername" class="help-block">
                                        <strong>{{usernameError}}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group" :class="{'has-error' : errorsPassword}">
                                <label for="password" class="col-md control-label">Password</label>

                                <div class="col-md">
                                    <input id="password" type="password" class="form-control" v-model="loginDetails.password" name="password" required>
                                    <span v-if="errorsPassword" class="help-block">
                                        <strong>{{passwordError}}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" v-model="loginDetails.remember"  name="remember" > Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col">
                                    <button type="submit" @click.prevent="loginPost" class="btn btn-primary">
                                        Login
                                    </button>

                                    <a class="btn btn-link" href="">
                                        Forgot Your Password?
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            <div class="container"><h5 >Random Qoutes: {{ qoutes }}</h5></div>
            </div>
            <div class="col"></div>
        </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
    computed: mapGetters({
        vmembers: 'AllMember',
        totalMembers: 'MembersCount',
        roladeskAPI: 'roladeskAPIget',
        qoutesAPI: 'qoutesAPIget'
        }),

    data() {
        return {
            qoutes: '',
            errors: {},
            loginDetails: {username:'',password:'', remember:true},
            errorsUsername: false,
            errorsPassword: false,
            usernameError:null,
            passwordError:null
        }
    },
    mounted() {
            axios.get(this.qoutesAPI)
                .then((reponse)=> this.qoutes = reponse.data)
                .catch((error) => this.errors = error.response)
    },
    methods: {
        loginPost(){
            let vlogin = this;
            axios.post(this.roladeskAPI, vlogin.loginDetails)
            .then((reponse)=> localStorage.setItem("token", reponse.data.token)
            )
            .catch(function (error) {
                console.log(error.response.data.error);

                if(error.response.data.error){
                
                 alert (error.response.data.error);
                }
                else if(reponse.data.token){
                    alert ('Succes!');
                }
                else
                {
                    alert ('Fields are empty!');
                };
                var errors = error.response
                if(errors.statusText === 'Unprocessable Entity'){
                    if(errors.data){

                        if(errors.data.username){
                           vlogin.errorsUsername = true
                           vlogin.usernameError = _.isArray(errors.data.username) ? errors.data.username[0]: errors.data.username
                        }
                        if(errors.data.password){
                           vlogin.errorsPassword = true
                           vlogin.passwordError = _.isArray(errors.data.password) ? errors.data.password[0] : errors.data.password
                        }
                    }
                }
            });
        }
    }
}

</script>

<style scoped>

</style>
