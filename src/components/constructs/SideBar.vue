<template>
  <div class="os-sidebar">
    <div class="sidebar-container d-none d-md-block">
      <div class="menu-sidebar">
        <b-list-group>
          <b-list-group-item v-for="(item, index) in menuList" :key="index">
            <router-link :to="item.href">
              <div class="icon">
                <img :src="item.icon" :alt="item.title" />
              </div>
              <div class="title">{{ item.title }}</div>
            </router-link>
          </b-list-group-item>
        </b-list-group>
      </div>

      <div class="list-course">
        <div class="list-title">Khóa học</div>
        <b-list-group>
          <b-list-group-item v-for="(item, index) in courseList" :key="index">
            <router-link :to="item.href">
              <div class="course-item">
                <div class="course-image">
                  <span>{{ item.title }}</span>
                </div>
              </div>
            </router-link>
          </b-list-group-item>
          <b-list-group-item class="view-more">
            <router-link to="#">
              <div class="course-item"><div>&#183;&#183;&#183;</div></div>
            </router-link>
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
          <b-list-group-item v-for="(item, index) in menuList" :key="index">
            <router-link :to="item.href">
              <div class="icon">
                <img :src="item.icon" :alt="item.title" />
              </div>
              <div class="title">{{ item.title }}</div>
            </router-link>
          </b-list-group-item>
        </b-list-group>
      </div>

      <div class="list-course">
        <div class="list-title">Khóa học</div>
        <b-list-group>
          <b-list-group-item v-for="(item, index) in courseList" :key="index">
            <router-link :to="item.href">
              <div class="course-item">
                <div class="course-image"></div>
                <div class="course-title">{{ item.title }}</div>
              </div>
            </router-link>
          </b-list-group-item>
          <b-list-group-item class="view-more">
            <router-link to="#">
              <div class="course-item"><div>&#183;&#183;&#183;</div></div>
            </router-link>
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
          icon: iconHome
        },
        {
          title: "Learn",
          href: "/courses",
          icon: iconLearn
        },
        {
          title: "Question",
          href: "/forum",
          icon: iconQuestion
        }
      ],
      courseList: [
        { title: "OOP", href: "#" },
        { title: "IOT", href: "#" },
        { title: "C++", href: "#" },
        { title: "JS", href: "#" }
      ]
    };
  }
};
</script>

<style lang="scss" scope>
.os-sidebar {
  .sidebar-container {
    width: 96px;
    height: 100%;

    padding: 0 12px;

    position: fixed;
    top: 86px;
    left: 0;

    .menu-sidebar {
      border-bottom: 1px solid #666;
      .list-group-item {
        width: 72px;
        height: 60px;
        border-radius: 12px;
        margin: 10px 0;

        padding-left: 0;
        padding-right: 0;

        border: none;

        a {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
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
    }

    .list-course {
      .list-title {
        margin: 20px 0;

        font-size: 14px;
        font-weight: 600;
      }
      .list-group-item {
        width: 100%;
        height: 60px;
        border-radius: 12px;
        margin: 10px 0;
        padding-left: 0;
        padding-right: 0;
        border: none;

        .course-item {
          display: flex;
          align-items: center;

          .course-image {
            height: 56px;
            flex: 0 100%;
            background: #4682b4;
            border-radius: 10px;

            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }

  #sidebar-sub {
    .b-sidebar-header {
      strong {
        display: none;
      }

      button {
        border: 1px solid #aaa;
        border-radius: 10px;
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
          padding-left: 0;
          padding-right: 0;
          border: none;

          a {
            display: flex;
            align-items: center;

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
      }

      .list-course {
        .list-title {
          margin: 20px 0;

          font-size: 22px;
          font-weight: 600;
        }
        .list-group-item {
          width: 100%;
          height: 60px;
          border-radius: 12px;
          margin: 10px 0;
          padding-left: 0;
          padding-right: 0;
          border: none;

          .course-item {
            display: flex;
            align-items: center;

            .course-image {
              height: 56px;
              flex: 0 40%;
              background: #4682b4;
              border-radius: 10px;
            }
            .course-title {
              flex: 0 60%;
              font-size: 12px;
              font-weight: 700;
              justify-content: left;
            }
          }
        }
      }
    }
  }

  .view-more {
    font-size: 15px;
    font-weight: 800;
    margin-top: 10px;

    .course-item {
      width: 100%;
      border: 1px dashed #ddd;
      border-radius: 5px;
      div {
        flex: 0 100%;
      }
    }
  }
}
</style>
