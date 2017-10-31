<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row">    
            <div class="card col" style="width: 30rem;">
                <div class="card-body">
                    <h4 class="card-title">Members</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Confirm if Going</h6>
                        <ul class="list-group ">
                            <li class="list-group-item" v-for="lmember in vmembers"> {{ lmember.name }}
                                <button type="button" class="btn btn-primary btn-sm float-right" @click="going(lmember)">Going</button>
                            </li>
                        </ul>
                </div>
            </div>
                <div style="width: 2rem;"></div>
            <div class="card col" style="width: 30rem;">
                <div class="card-body">
                    <h4 class="card-title">Members that confirmed</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Goin Members total: <b class="text-success">{{ vtotal }}</b></h6>
                        <ul class="list-group">
                            <li class="list-group-item" v-for="lconfirmed in vconfirmed"> {{ lconfirmed.name }} 
                                <button type="button" class="btn btn-danger btn-sm float-right" @click="notGoing(lconfirmed)">Unconfirm</button>
                            </li>
                        </ul>
                </div>
            </div>
            </div>  
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: mapGetters({
        vmembers: 'notGoing',
        vconfirmed: 'confirmedGoing',
        vtotal: 'totalGoing'
    }),
    methods: {
      going(member) {
          member.going = true;
      },
      notGoing(confirmed) {
          confirmed.going = false;
      }
  }
}
</script>
