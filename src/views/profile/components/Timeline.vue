<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          timestamp: '2024/8/19',
          title: 'Update Github template',
          content: 'GuoWeiLiu committed 2024/8/19 15:04'
        },
        {
          timestamp: '2024/8/19',
          title: 'Update Github template',
          content: 'GuoWeiLiu committed 2024/8/19 15:04'
        },
        {
          timestamp: '2024/8/19',
          title: 'Update Github template',
          content: 'GuoWeiLiu committed 2024/8/19 15:04'
        }
      ]
    }
  }
}
</script>
