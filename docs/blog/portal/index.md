---
layout: doc
layoutClass: m-nav-layout
lastUpdated: true
---

<script setup>
import MNavLinks from './components/MNavLinks.vue'

import { NAV_DATA } from './components/nav'
</script>
# 门户
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"></MNavLinks>
