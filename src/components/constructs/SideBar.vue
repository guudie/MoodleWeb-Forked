<template>
  <div class="os-sidebar">
    <div class="sidebar-container d-none d-md-block">
      <div class="menu-sidebar">
        <b-list-group>
          <b-list-group-item
            v-for="(item, index) in menuList"
            :key="index"
            :href="item.href"
          >
            <div class="icon">
              <img :src="item.icon" :alt="item.title" />
            </div>
            <div class="title">{{ item.title }}</div>
          </b-list-group-item>
        </b-list-group>
      </div>

      <div class="list-course">
        <div class="list-title">Khóa học</div>
        <b-list-group>
          <b-list-group-item
            v-for="(item, index) in courseList"
            :key="index"
            :href="item.href"
          >
            <div class="course-item">{{ item.title }}</div>
          </b-list-group-item>
          <b-list-group-item href="#" class="view-more">
            <div class="course-item">...</div>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <b-sidebar id="sidebar-sub" title="Sidebar" class="d-md-none" shadow>
      <b-form class="search-sidebar">
        <b-form-input
          size="md"
          class="mr-sm-2 search-input"
          placeholder="Search"
        >
        </b-form-input>
      </b-form>
      <div class="menu-sidebar">
        <b-list-group>
          <b-list-group-item
            v-for="(item, index) in menuList"
            :key="index"
            :href="item.href"
          >
            <div class="icon">
              <img :src="item.icon" :alt="item.title" />
            </div>
            <div class="title">{{ item.title }}</div>
          </b-list-group-item>
        </b-list-group>
      </div>

      <div class="list-course">
        <div class="list-title">Khóa học</div>
        <b-list-group>
          <b-list-group-item
            v-for="(item, index) in courseList"
            :key="index"
            :href="item.href"
          >
            <div class="course-item">{{ item.title }}</div>
          </b-list-group-item>
          <b-list-group-item href="#" class="view-more">
            <div class="course-item">...</div>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import iconHome from "../../assets/images/sidebar/house.png";
import iconLearn from "../../assets/images/sidebar/learn.png";
import iconQuestion from "../../assets/images/sidebar/conversation.png";

export default {
  name: "SideBar",
  data() {
    return {
      menuList: [
        {
          title: "Home",
          href: "/",
          icon: iconHome,
        },
        {
          title: "Learn",
          href: "/courses",
          icon: iconLearn,
        },
        {
          title: "Question",
          href: "/forum",
          icon: iconQuestion,
        },
      ],
      courseList: [
        { title: "OOP", href: "#" },
        { title: "IOT", href: "#" },
        { title: "C++", href: "#" },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
.os-sidebar {
  .sidebar-container {
    width: 96px;
    height: 100%;

    padding: 0 12px;

    .menu-sidebar {
      border-bottom: 1px solid #666;
      .list-group-item {
        width: 72px;
        height: 60px;
        border-radius: 12px;
        margin: 10px 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding-left: 0;
        padding-right: 0;

        border: none;

        .icon {
          flex: 0 100%;
          img {
            width: 25px;
            height: 22px;
          }
        }
        .title {
          flex: 0 100%;
          font-size: 12px;
          font-weight: 700;
        }
      }
    }

    .list-course {
      .list-title {
        margin: 20px 0;

        font-size: 14px;
        font-weight: 600;
      }

      .view-more {
        font-size: 15px;
        font-weight: 800;
        margin-top: 10px;
      }
    }
  }

  #sidebar-sub {
    .b-sidebar-header {
      strong {
        display: none;
      }
    }
    .b-sidebar-body {
      padding: 0 50px;

      .search-sidebar {
        margin: 10px 0 20px 0;
        .search-input {
          border-radius: 20px;
        }
      }

      .menu-sidebar {
        border-bottom: 1px solid #666;
        padding-bottom: 20px;

        .list-group-item {
          width: 100%;
          height: 60px;
          border-radius: 12px;
          margin: 10px 0;
          display: flex;

          align-items: center;
          padding-left: 0;
          padding-right: 0;

          border: none;

          .icon {
            flex: 0 40%;
            img {
              width: 25px;
              height: 22px;
            }
          }
          .title {
            flex: 0 60%;
            font-size: 12px;
            font-weight: 700;
            justify-content: left;
          }
        }
      }

      .list-course {
        .list-title {
          margin: 20px 0;

          font-size: 22px;
          font-weight: 600;
        }

        .view-more {
          font-size: 15px;
          font-weight: 800;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>