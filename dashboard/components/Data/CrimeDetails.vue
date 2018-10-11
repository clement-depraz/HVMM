<template>
  <div>
    <div>

        <div class="columns">
           <div class="column">
            <div class="row">
                <div class="col-md-3">
                <strong>Crime internal BPD Number :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.compnos }}
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                <strong>Nature Code :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.naturecode }}
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                <strong>Incident type description:</strong>
                </div>
                <div class="col-md-3">
                {{ crime.incident_type_description }}
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-3">
                <strong>Main crime code :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.main_crimecode }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                <strong>Reporting District :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.reptdistrict }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                <strong>From Date:</strong>
                </div>
                <div class="col-md-3">
                {{ crime.fromdate }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                <strong>Weapon Type:</strong>
                </div>
                <div class="col-md-3">
                {{ crime.weapontype }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                <strong>Shooting :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.shooting }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                <strong>domestic :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.domestic }}
                </div>
            </div>

           </div>


            <div class="column">
            <div class="row">
                <div class="col-md-3">
                <strong>shift :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.shift }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                <strong>Year :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.year }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                <strong>Month :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.month }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                <strong>Day of week :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.day_week }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                <strong>UCR part :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.ucrpart }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                <strong>X :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.x }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                <strong>Y :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.y }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                <strong>Streetname :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.streetname }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                <strong>X streetname:</strong>
                </div>
                <div class="col-md-3">
                {{ crime.xstreetname }}
                </div>
            </div>    

            <div class="row">
                <div class="col-md-3">
                <strong>Location :</strong>
                </div>
                <div class="col-md-3">
                {{ crime.location }}
                </div>
            </div>  

            </div>

           </div>         

     
    </div>
 

  </div>
</template>
<script>
export default {
  name: 'CrimeDetails',
  props: [ 'crime' ]
}
</script>