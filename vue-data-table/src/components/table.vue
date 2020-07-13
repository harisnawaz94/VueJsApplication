<template>
  <div>
    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">Name</th>
            <th class="text-left">Year</th>
            <th class="text-left">Address</th>
            <th class="text-left">X Cordinates</th>
            <th class="text-left">Y Cordinates</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in item" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.massname }}</td>
            <td>{{ item.year }}</td>
            <td>{{ item.wo }}</td>
            <td>{{ item.locx }}</td>
            <td>{{ item.locy }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from "axios";
import item from "../classes/item";
export default {
  name: "App",
  data() {
    return {
      Data: [],
    };
  },
  /**
   * Loading data from provided URL and inserting into ORM
   */
  mounted() {
    axios
      .get(
        "https://geoportal.stadt-koeln.de/arcgis/rest/services/Fahrradverkehr_Ma%C3%9Fnahmen/MapServer/0/query?where=objectid+is+not+null&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=pjson"
      )
      .then((response) => {
        this.Data = response.data;
        console.log(this.Data);
        console.log("sksjksdks");
        this.Data.features.map(function(iterate) {
          item.insert({
            data: {
              id: iterate.attributes.OBJECTID,
              massname: iterate.attributes.MASSNAHME,
              year: iterate.attributes.JAHR,
              wo: iterate.attributes.WO,
              locx: iterate.geometry.x,
              locy: iterate.geometry.y,
            },
          });
        });
      });
  },
  computed: {
    /**
     * Getting all data to display
     */
    item() {
      return item.all();
    },
  },
};
</script>
