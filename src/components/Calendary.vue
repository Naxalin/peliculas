<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<template>
    <DefaultLayout>
        <div class="pl-90 pr-30 pt-40">
            <!-- <table>
                <tr>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miercoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sabado</th>
                    <th>Domingo</th>
                </tr>
                <tr>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td class="dias">1</td>
                    <td class="dias">2</td>
                </tr>
                <tr>
                    <td class="dias">3</td>
                    <td class="dias">4</td>
                    <td class="dias">5</td>
                    <td class="dias">6</td>
                    <td class="dias">7</td>
                    <td class="dias">8</td>
                    <td class="dias">9</td>
                </tr>
                <tr>
                    <td class="dias">10</td>
                    <td class="dias">11</td>
                    <td class="dias">12</td>
                    <td class="dias">13</td>
                    <td class="dias">14</td>
                    <td class="dias">15</td>
                    <td class="dias">16</td>
                </tr>
                <tr>
                    <td class="dias">17</td>
                    <td class="dias">18</td>
                    <td class="dias">19</td>
                    <td class="dias">20</td>
                    <td class="dias">21</td>
                    <td class="dias">22</td>
                    <td class="dias">23</td>
                </tr>
                <tr>
                    <td class="dias">24</td>
                    <td class="dias">25</td>
                    <td class="dias">26</td>
                    <td class="dias">27</td>
                    <td class="dias">28</td>
                    <td class="dias">29</td>
                    <td class="dias">30</td>
                </tr>
                <tr>
                    <td class="dias">31</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
            </table> -->
            <iframe
                src="https://calendar.google.com/calendar/embed?src=classroom108030458071049528811%40group.calendar.google.com&ctz=Europe%2FMadrid"
                style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
    </DefaultLayout>
</template>

<style>
table {
    width: 100%;
    border-collapse: collapse;
}

th {
    background-color: #f2f2f2;
}

th,
td {
    border: 1px solid #f2f2f2;
    padding: 8px;
    text-align: center;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:nth-child(odd) {
    background-color: #f2f2f2;
}

.dias {
    background-color: white;
}
</style>